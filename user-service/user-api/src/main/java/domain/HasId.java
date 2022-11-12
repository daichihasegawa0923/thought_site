package domain;

import java.util.UUID;

public abstract class HasId {
	
	protected String id;
	
	public HasId() {
		this.setId();
	}

	
	public void setId() {
		this.id = UUID.randomUUID().toString();
	}
	
	public String getId() {
		return this.id;
	}

}
