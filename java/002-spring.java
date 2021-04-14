

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