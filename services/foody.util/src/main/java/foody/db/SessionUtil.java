package foody.db;

import java.util.function.Consumer;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class SessionUtil {

	private SessionUtil() {}

	public static Session getSession() throws Exception{
		Configuration configuration = new Configuration().configure();
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session  = sessionFactory.openSession();
		return session;
	}

	public static void transaction(Consumer<Session> execution) throws Exception {
		Transaction transaction = null;
		Session session = null;
		try {
		session  = getSession();
		transaction = session.beginTransaction();

		execution.accept(session);

		transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			System.out.println(e.toString());
			if (transaction != null) transaction.rollback();
			throw e;
		} finally {
			if (session != null) session.close();
		}
	}
}
