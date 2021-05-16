

ApplicationContext ctx = new ClassPathXmlApplicationContext("applicatioinContext.xml");
var ctx = new AnnotationConfigApplicationContext(SpringConfig.class);

UserService userService = (UserService)ctx.getBean("userService");
userService.login();



@Configuration
@ComponentScan
public class SpringConfig {

    @Bean
    public User user()
    {
        return new User();

    }

}


BeanDefinition
AbstractBeanDefinition
-- bean property: class, name, scope, constructor arguments, properties, autowiring mode, lazy-initialization mode, initialization method, destruction method

xml <bean>
---- id, name, class, 
---- init-method   // InitializingBean.afterPropertiesSet(), @PostConstruct, (JSR-250)
---- destroy-method // DisposableBean.destroy(), @PreDestroy, (JSR-250)


 BeanFactory, HierarchicalBeanFactory, ListableBeanFactory
 ApplicationContext, ConfigurableApplicationContext
 WebApplicationContext, ConfigurableWebApplicationContext,


ApplicationEvent extends java.util.EventObject
ApplicationEventPublisher	 // (ClassPathXmlApplicationContext)
ApplicationEventPublisherAware	// inject ApplicationEventPublisher
ApplicationListener<E extends ApplicationEvent>
--onApplicationEvent(ApplicationEvent event)
ApplicationEventMulticaster	  // Interface to be implemented by objects that can manage a number of ApplicationListener objects and publish events to them.


@Component, @Controller, @Service, @Repositiory // default byType
@Qualifier // byName
@Autowire


Runtime.getRuntime().addShutdownHook( Thread )
ConfigurableApplicationContext.registerShutdownHook()

bean scope, @Scope
singleton @Singleton// default
prototype
request  @RequestScope
session @SessionScope
globalSession 
application @ApplicationScope
websocket
@ConversationScope


