<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page isELIgnored="false" %>
<% 
	String path=request.getContextPath();

	String basePath=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>书籍后台管理登录</title>
<base href="<%=basePath%>"/>
<script type="text/javascript">
	function loadImage(){
		var img=document.getElementById("randImg");
		img.src="imageCode.jsp?r="+Math.random();
	}

</script>

</head>
<body>
	<c:if test="${msgmsg!='' }">
		<font style="color:red"><c:out value="${errmsg}"></c:out></font>
	
	</c:if>
	<form action="adminLogin" method="post">
		<fieldset>
			<legend>管理后台登陆</legend>
			<p>用户名：<input type="text" name="uname"/></p>
			<p>密码：<input type="password" name="password"/></p>
			<p>验证码：<input type="text" name="validateCode"/>
			<img id="randImg" border=0 src="imageCode.jsp">
			<a href="javascript:loadImage();">换一张</a></p>
			<p><input type="submit" value="登录"/></p>
		</fieldset>
	</form>
</body>

</html>