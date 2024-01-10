const { createNewProfileController } = require('../createNewProfile.controller');
const {
  mockRequest,
  mockResponse,
} = require('../../../utils/interceptors.utils');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../utils/dbHandler.utils');

let req;
let res;

// beforeAll(async () => dbConnect());
// afterAll(async () => dbDisconnect());

describe('Profile Test Suite', () => {
    beforeEach(() => {
      req = mockRequest();
      res = mockResponse();

      req.body = { id: '1', name: 'test', description: 'test' };
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    test('should create new profile ', async () => {        
      await createNewProfileController(req, res); 
      
      const { redirect } = res;
      expect(redirect).not.toHaveBeenCalledTimes(100);
      expect(redirect).toHaveBeenCalled();
    });  
    
  });