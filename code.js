const { TransactionProcessor, TransactionHandler } = require('sawtooth-sdk/processor');

class HelloHandler extends TransactionHandler {
  constructor() {
    super('hello_world', ['1.0'], ['abcdef']);
  }

  apply(transactionProcessRequest, context) {
    console.log('hello world');
    return Promise.resolve();
  }
}

const tp = new TransactionProcessor('tcp://localhost:4004');
tp.addHandler(new HelloHandler());
tp.start();
