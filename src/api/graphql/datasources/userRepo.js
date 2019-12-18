import baseRepo from './baseRepo';
import User from '../../models/user';
import { LIMIT } from '../../../config/index';

class userRepo extends baseRepo {
  constructor() {
    super();
    this.model = User;
  }
  /**
   * function get user
   * @param {number} id
   */
  async createUser(data) {
    try {
      let results = {
        error: 1,
        message: 'Create user false',
      };
      const responses = await this.model.create(data);

      if (responses) {
        results = {
          error: 0,
          message: 'Create user success',
        };
        return results;
      }
      return results;
    } catch (error) {
      console.log(error);
    }
  }
  /**
   *
   * @param {Number} id
   */
  async getUserById({ id }) {
    try {
      const responses = await this.model.findOne({ userId: id });
      return responses;
    } catch (error) {
      console.log(error);
    }
  }
  /**
   *
   * @param {String} username
   */
  async getAll(page = 0, limit = LIMIT) {
    try {
      const responses = await this.model
        .find()
        .skip(page)
        .limit(limit);
      return responses;
    } catch (error) {
      console.log(error);
    }
  }
  async loginUserName({ username }) {
    try {
      const responses = await this.model.findOne({ userName: username });
      return responses;
    } catch (error) {
      console.log(error);
    }
  }
}

export default userRepo;
