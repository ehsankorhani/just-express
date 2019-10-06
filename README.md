### Section 3

## How the Internet works

Internet is a mesh of client and servers which communicate in form of Packets.

Express.js is in charge of handling requests to a server and the responses from that server.

There are 5 basic levels in the infrastructure of a Packet:

| Pakcet Layers | Example |
| ------------- | ------- |
| Application | HTTP/SSH/SMTP/FTP |
| Transport | UDP/TCP |
| Network | IP |
| Link | WIFI |
| Physical | Cables | 


Transport creates _2^16 ports_ on a computer. Packets are converted to _Segments_ in this layer. The segment contains Source and Desctination port addresses.

#### UDP
- Lightweight: 8 bytes
- Connectionless: no need to make a connection first.
- Consistency: Sends data no matter what. Packets can be lost or become out of order.
- It's fast and used primarily for streaming and video games.
- Unreliable!

#### TCP
- Connection-based: have to create a connection first.
- Reliable.
- Delivery acknowledgment.
- Retransmission: if data not received.
- In-order packet: guaranteed
- Congestion control: introduce latency to keep up with network.

**TCP/IP** get two computer ready to talk to each other.

#### HTTP
HTTP is a protocol in Application layer.
It's efficient and is only connected when required.

HTTP is stateless. As soon as the connection is closes everything will be forgotten. Acknowledgment has to happen for every connection.

##### HTTP Message
Start line: specifies the request or describes body. <br />
Header: key/value pairs <br />
[Blank Line] <br />
Body

Request start: i.e. Start: get /blog http/1.1
Response start: i.e. http/1.1 404

To experiment, try:
```bash
$ curl -v https://ehsankorhani.com
```



### Reference
[Just Express by Robert Bunch](https://practifitraining.udemy.com/course/just-express-with-a-bunch-of-node-and-http-in-detail)