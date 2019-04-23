const CronJob = require('cron/lib/cron.js').CronJob;

log.info('before job instantiation');
const job = new CronJob('0 */1 * * * *', function() {
	log.info('CronJob every minute');
});
log.info('after job instantiation');

job.start();
