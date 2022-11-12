package domain;

public class User extends HasId {

	/**
	 * ユーザー名
	 */
	private String name = null;
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getName() {
		return this.name;
	}
}
