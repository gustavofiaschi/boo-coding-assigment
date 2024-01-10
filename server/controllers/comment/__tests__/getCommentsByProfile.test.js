const { getCommentsByProfileController } = require('../getCommentsByProfile.controller');
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

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('Get Comments Test Suite', () => {
    beforeEach(() => {
      req = mockRequest();
      res = mockResponse();  
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    test('should get comments ', async () => {      
      req.params = { id: '1' };  
      const comments = await getCommentsByProfileController(req, res);   
      
      expect(comments).toBeDefined();
      expect(res.status).toHaveBeenCalledWith(200); 
    });      
  });