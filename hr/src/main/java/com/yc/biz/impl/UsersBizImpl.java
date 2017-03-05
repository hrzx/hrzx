package com.yc.biz.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yc.bean.Users;
import com.yc.biz.UsersBiz;
import com.yc.biz.UsersBiz;
import com.yc.dao.BasicMybatisDao;
@Service
public class UsersBizImpl implements UsersBiz {
		private BasicMybatisDao basicMybatisDao;
		@Resource(name="basicMybatisDaoImpl")
		public void setBasicMybatisDao(BasicMybatisDao basicMybatisDao) {
			this.basicMybatisDao = basicMybatisDao;
		}
		@Override
		public Users add(Users users) {
			this.basicMybatisDao.insert(users, "addUsers");
			return users;
		}
		@Override
		public Users update(Users Users) {
			this.basicMybatisDao.update(Users, "updateUsers");
			return Users;
		}
		@Override
		public List<Users> findUsers(Users Users) {
			List<Users> list=this.basicMybatisDao.select(Users, "findUsers");
			return list;
		}
	
}

	