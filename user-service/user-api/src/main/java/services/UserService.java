package services;

import java.awt.print.Book;

import org.hibernate.Session;

import db.util.SessionUtil;
import domain.User;

public class UserService {
	// Singleton
	private UserService() {}
	
	public static void save(User user) {
		 SessionUtil.transaction((session)->{session.persist(user);});
	}
}
