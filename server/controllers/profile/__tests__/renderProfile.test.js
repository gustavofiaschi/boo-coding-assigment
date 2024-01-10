const { renderProfileController } = require('../renderProfile.controller');
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
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    test('should get profile ', async () => {      
      req.params = { id: '1' };  
      await renderProfileController(req, res);   
      expect(res.render).toHaveBeenCalled(); 
    });      
  });