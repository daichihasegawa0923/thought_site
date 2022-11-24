package domain;

public class Message extends IId {
	private Message to;
	private User user;
	private String content;
	private int likeCount;
	
	public Message getTo() {
		return to;
	}
	public void setTo(Message to) {
		this.to = to;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getLikeCount() {
		return likeCount;
	}
	public void setLikeCount(int likeCount) {
		this.likeCount = likeCount;
	}
	
	
}
