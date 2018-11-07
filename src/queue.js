import amqp from 'amqplib'

const HOST = 'amqp://guest:guest@127.0.0.1'
const OUTGOING_QUEUE = 'task_queue'
let channel = null

export const initQueue = function() {
    amqp.connect(HOST)
    .then((conn) => conn.createChannel())
    .then((ch) => {
        channel = ch
        const outgoing = OUTGOING_QUEUE;
        ch.assertQueue(outgoing, {durable: true});

        const incoming = 'update_queue';

        // ch.prefetch(1);
        // ch.consume(incoming, (msg) => {
        //     const msgContent = msg.content.toString()
        //     console.log(" [x] Received %s", msgContent);
        //     const msgObj = JSON.parse(msgContent)
        //     callback(msgObj.message, msgObj.client_id)
        //     ch.ack(msg);
        // }, {noAck: false});
    });
}

export const processImage = function (id, imageUrl) {
    console.log('processImage', imageUrl, id)
    const data = JSON.stringify({
        image_url: imageUrl,
        id
    })
    channel.sendToQueue(OUTGOING_QUEUE, new Buffer(data), {persistent: true});
    console.log(" [x] Sent '%s'", data);
}