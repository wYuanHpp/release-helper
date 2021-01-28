import PublishHelper from '../src/index';

const publisher = new PublishHelper({});

async function isWorkSpaceEmpty () {
  const isEmpty = await publisher.isWorkSpaceEmpty()
  console.log(isEmpty)
}

isWorkSpaceEmpty();