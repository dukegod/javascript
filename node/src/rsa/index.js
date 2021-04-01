const NodeRSA = require('node-rsa');

const a_public_key_data = '-----BEGIN PUBLIC KEY----- ... -----END PUBLIC KEY-----';
const a_private_key_data = '-----BEGIN PRIVATE KEY----- ... -----END PRIVATE KEY-----';

const b_public_key_data = '-----BEGIN PUBLIC KEY----- ... -----END PUBLIC KEY-----';
const b_private_key_data = '-----BEGIN PRIVATE KEY----- ... -----END PRIVATE KEY-----';

// 生成 A 的公私钥对象
const a_public_key = new NodeRSA(a_public_key_data);
const a_private_key = new NodeRSA(a_private_key_data);

// 生成 B 的公私钥对象
const a_public_key = new NodeRSA(a_public_key_data);
const a_private_key = new NodeRSA(a_private_key_data);

const text = 'Hello RSA!';

// 加签并加密
const sign = a_private_key.sign(text, 'base64', 'utf8');
console.log('A 私钥加签:', sign);

const encrypted = a_public_key.encrypt(sign, 'base64');
console.log('B 公钥加密:', encrypted);

// 解密并验签
const decrypted = a_public_key.decrypt(encrypted, 'utf8');
console.log('B 私钥解密:', decrypted);

const verify = a_public_key.verify(text, decrypted, 'utf8', 'base64');
console.log('A 公钥验签:', verify);
