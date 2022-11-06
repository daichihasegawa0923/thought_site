package domain;

import java.util.UUID;

public class User {
	/**
	 * ID
	 */
	private String id = null;

	/**
	 * ユーザー名
	 */
	private String name = null;
	
	public void setId() {
		this.id = UUID.randomUUID().toString();
	}
	
	public String getId() {
		return this.id;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getName() {
		return this.name;
	}
}
