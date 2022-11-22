package domain;

import java.util.UUID;

public abstract class IId {
	protected String id;
	
	public IId() {
		this.id = UUID.randomUUID().toString();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public void setRandomId() {
		this.id = UUID.randomUUID().toString();
	}
}
