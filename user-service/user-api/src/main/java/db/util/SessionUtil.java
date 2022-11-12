package db.util;

import java.util.function.Consumer;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;


public class SessionUtil {
	
	private SessionUtil() {}
	
	public static Session getSession() {
		Configuration configuration = new Configuration().configure();
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session  = sessionFactory.openSession();
		return session;
	}
	
	public static void transaction(Consumer<Session> execution) {
		Session session  = getSession();
		Transaction transaction = session.beginTransaction();
		
		execution.accept(session);

		transaction.commit();
		session.close();
	}
}
