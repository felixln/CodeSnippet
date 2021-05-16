
SqlSessionFactory
SqlSession

//settings
properties
settings
typeAliases
typeHandlers
objectFactory
environments
mapper

//Mapper XML
select

insert / update / delete

sql

parameters

ResultMaps


Dynamic SQL
if
choose ( when, otherwise)
where
set
foreach (bind)
{
}


// association
// 1-1 many(including one) to one 
<select id="card"  javaType="Card"/>

<select  id  resultMap="personMapper">
    select * from ...
</select>

<resultMap id="personMapper">
    <id property column />
	<result property column />
	<association property  column  select="card"  javaType="Card">
</resultMap>

// 1-* one to many

<select  id  resultMap="clazzMap">
    select * from ...
</select>

<resultMap id="clazzMap">
    <id property column />
	<result property column />
    <collection property  column  javaType="ArrayList" ofType="Student" fetchType="lazy" select="...">
        <id property column />
        <id property column />
    </collection>
</resultMap>



// *-*, many to many
