/**
 * Foreign exchange rates API with currency conversion
 * Exchange rates API is a free service for current and historical foreign exchange rates published by the European Central Bank
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Currency from './Currency';

/**
 * The HistoryRates model module.
 * @module model/HistoryRates
 * @version 1.0.1
 */
class HistoryRates {
    /**
     * Constructs a new <code>HistoryRates</code>.
     * Date / Rates pair wrapped with base and date range information
     * @alias module:model/HistoryRates
     * @param rates {Object.<String, Object.<String, Number>>} 
     * @param startAt {Date} %Y-%m-%d
     * @param base {module:model/Currency} 
     * @param endAt {Date} %Y-%m-%d
     */
    constructor(rates, startAt, base, endAt) { 
        
        HistoryRates.initialize(this, rates, startAt, base, endAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rates, startAt, base, endAt) { 
        obj['rates'] = rates;
        obj['start_at'] = startAt;
        obj['base'] = base;
        obj['end_at'] = endAt;
    }

    /**
     * Constructs a <code>HistoryRates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoryRates} obj Optional instance to populate.
     * @return {module:model/HistoryRates} The populated <code>HistoryRates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoryRates();

            if (data.hasOwnProperty('rates')) {
                obj['rates'] = ApiClient.convertToType(data['rates'], {'String': Object});
            }
            if (data.hasOwnProperty('start_at')) {
                obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Date');
            }
            if (data.hasOwnProperty('base')) {
                obj['base'] = Currency.constructFromObject(data['base']);
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, Object.<String, Number>>} rates
 */
HistoryRates.prototype['rates'] = undefined;

/**
 * %Y-%m-%d
 * @member {Date} start_at
 */
HistoryRates.prototype['start_at'] = undefined;

/**
 * @member {module:model/Currency} base
 */
HistoryRates.prototype['base'] = undefined;

/**
 * %Y-%m-%d
 * @member {Date} end_at
 */
HistoryRates.prototype['end_at'] = undefined;






export default HistoryRates;

