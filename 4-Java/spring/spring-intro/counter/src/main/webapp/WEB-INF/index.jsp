<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Welcome!</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body class="bg-dark">
<div class="container mx-auto p-5">
	<div class="card mx-auto p-5 text-center bg-secondary w-50">
		<h3 class="mb-5">Welcome User!</h3>
		<a href="/counter" class="btn btn-warning mb-2 text-white fw-bold">View Counter</a>
		<a href="/counter/+2" class="btn btn-info mb-2 text-white fw-bold">Add Two</a>
	</div>
</div>
</body>
</html>