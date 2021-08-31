import { createDbStore } from "../../utils/createDbStore";
import "../../types/Shoot";

const createShootsDb = () => {
  const dbStore = createDbStore("shoots");

  /**
   * @name add
   * @param {Omit<Shoot, 'id'> | Omit<Shoot, 'id'>[]} newValues
   * @returns {Promise<Shoot | Shoot[]>}
   */
  const add = async (newValues) => await dbStore.add(newValues);

  /**
   * @name update
   * @param {Prmise<Shoot> | Prmise<Shoot>[]} query
   * @returns {Promise<void>}
   */
  const update = async (newValues) => await dbStore.update(newValues);

  /**
   * @name remove
   * @param {Partial<string> | Partial<string>[]} query
   * @returns {Promise<void>}
   */
  const remove = async (query) => await dbStore.remove(query);

  /**
   * @name read
   * @param {string | string[]} query
   * @returns {PromiseShoot | Shoot[]>}
   */
  const read = async (query) => await dbStore.read(query);

  /**
   * @typedef {object} options
   * @property {number} [count]
   * @property {string} [sorting]
   * @property {boolean} [reverse]
   */

  /**
   * @name search
   * @param {(value: object) => boolean} query
   * @param {number} [options]
   * @returns {Promise<object[]>}
   */

  /**
   * @name search
   * @param {string | string[]} query
   * @returns {Promise<void>}
   */
  const search = async (query, options) => await dbStore.search(query, options);

  return {
    add,
    update,
    remove,
    read,
    search,
  };
};
export const Shoots = createShootsDb();
export default Shoots;