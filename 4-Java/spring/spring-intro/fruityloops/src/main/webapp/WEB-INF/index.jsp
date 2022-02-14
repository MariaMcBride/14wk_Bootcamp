<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Fruit Store</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/style.css" />
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container mx-auto p-5">
	<h4 class="heading mb-4">Fruit Store</h4>
	<!-- <div class="card mx-auto p-5"> -->
		<table class="table">
		  <thead>
		    <tr>
		      <th scope="col">Name</th>
		      <th scope="col">Price</th>
		    </tr>
		  </thead>
		  <tbody>
		  <c:forEach var="fruit" items="${fruits}">
		    <tr>
		      <td><c:out value="${fruit.name}"/></td>
		      <td><c:out value="${fruit.price}"/></td>
		    </tr>
	      </c:forEach>
		  </tbody>
		</table>
	<!-- </div> -->
</div>

</body>
</html>