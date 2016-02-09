import test from 'tape'
import sinon from 'sinon'

import createCdaApi from '../../lib/create-cda-api'

function setupWithData (promise) {
  const getStub = sinon.stub()
  const api = createCdaApi({
    get: getStub.returns(promise)
  })
  return {api, getStub}
}

test('CDA call getSpace', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.resolve({
    data: data
  }))

  api.getSpace()
  .then(r => {
    t.equal(r, data)
    t.end()
  })
})

test('CDA call getSpace fails', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.reject({
    data: data
  }))

  api.getSpace()
  .then(() => {}, r => {
    t.equal(r, data)
    t.end()
  })
})

test('CDA call getContentType', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.resolve({
    data: data
  }))

  api.getContentType()
  .then(r => {
    t.equal(r, data)
    t.end()
  })
})

test('CDA call getContentType fails', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.reject({
    data: data
  }))

  api.getContentType()
  .then(() => {}, r => {
    t.equal(r, data)
    t.end()
  })
})

test('CDA call getContentTypes', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.resolve({
    data: data
  }))

  api.getContentTypes()
  .then(r => {
    t.equal(r, data)
    t.end()
  })
})

test('CDA call getContentTypes fails', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.reject({
    data: data
  }))

  api.getContentTypes()
  .then(() => {}, r => {
    t.equal(r, data)
    t.end()
  })
})

test('CDA call getEntry', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.resolve({
    data: data
  }))

  api.getEntry()
  .then(r => {
    t.equal(r, data)
    t.end()
  })
})

test('CDA call getEntry fails', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.reject({
    data: data
  }))

  api.getEntry()
  .then(() => {}, r => {
    t.equal(r, data)
    t.end()
  })
})

test('CDA call getEntries', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.resolve({
    data: data
  }))

  api.getEntries()
  .then(r => {
    t.equal(r, data)
    t.end()
  })
})

test('CDA call getEntries fails', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.reject({
    data: data
  }))

  api.getEntries()
  .then(() => {}, r => {
    t.equal(r, data)
    t.end()
  })
})

test('CDA call getAsset', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.resolve({
    data: data
  }))

  api.getAsset()
  .then(r => {
    t.equal(r, data)
    t.end()
  })
})

test('CDA call getAsset fails', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.reject({
    data: data
  }))

  api.getAsset()
  .then(() => {}, r => {
    t.equal(r, data)
    t.end()
  })
})

test('CDA call getAssets', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.resolve({
    data: data
  }))

  api.getAssets()
  .then(r => {
    t.equal(r, data)
    t.end()
  })
})

test('CDA call getAssets fails', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.reject({
    data: data
  }))

  api.getAssets()
  .then(() => {}, r => {
    t.equal(r, data)
    t.end()
  })
})

test('CDA call sync', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.resolve({
    data: data
  }))

  api.sync()
  .then(r => {
    t.equal(r, data)
    t.end()
  })
})

test('CDA call sync fails', t => {
  const data = {
    sys: {
      id: 'id'
    }
  }
  const {api} = setupWithData(Promise.reject({
    data: data
  }))

  api.sync()
  .then(() => {}, r => {
    t.equal(r, data)
    t.end()
  })
})