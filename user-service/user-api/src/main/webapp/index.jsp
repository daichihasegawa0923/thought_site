<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
String name = request.getParameter("name");
if (name == null) name = "no name";
%>
<h1>入力フォーム</h1>
<p>User Name is <%= name %></p>
<form method="post">
<input type="text" name="name" />
<button type="submit">送信</button>
</form>
</body>
</html>