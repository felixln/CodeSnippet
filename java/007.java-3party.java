
// 简单日志门面（Simple Logging Facade for Java）
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
Logger log = LoggerFactory.getLogger(PlugInExample.class);
log.info( msg )


Quartz

SchedulerFactory sf = new StdSchedulerFactory();
Scheduler sched = sf.getScheduler();

 JobDetail job = newJob(SimpleJob.class).withIdentity("job" + count, "group_1").requestRecovery().buid();
 Trigger trigger = newTrigger().withIdentity("trigger_" + count, "group_1").startAt(datetime).build();

sched.scheduleJob(job, trigger);

sched.start();
sched.shutdown(true);

// check meta data
SchedulerMetaData metaData = sched.getMetaData();
metaData.getNumberOfJobsExecuted() 