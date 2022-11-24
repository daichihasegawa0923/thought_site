package domain;

public class Relation extends IId {
	private String relation = null;
	private User user = null;
	private User otherUser = null;

	public String getRelation() {
		return relation;
	}
	public void setRelation(String relation) {
		this.relation = relation;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public User getOtherUser() {
		return otherUser;
	}
	public void setOtherUser(User otherUser) {
		this.otherUser = otherUser;
	}
	
	
}
