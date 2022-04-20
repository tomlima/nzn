'use strict';

/**
 * embaixador service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::embaixador.embaixador');
