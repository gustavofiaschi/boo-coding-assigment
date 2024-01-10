const { createNewLikeForCommentController } = require('../createNewLikeForComment.controller');
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

describe('Create New Like For Comment Test Suite', () => {
    beforeEach(() => {
      req = mockRequest();
      res = mockResponse();

      req.body = { id: 1, profileId: 1, title: 'test', description: 'test', vote: { id: 1, mbit: 'INFP', enneagram: '1w2', zodiac: 'Aries' }, likes: 1, createdAt: Date.now() };
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    test('should add new like for the comment ', async () => {        
      await createNewLikeForCommentController(req, res); 
            
      expect(res.status).toHaveBeenCalledWith(200);      
    });    
  });