<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>View Book Details</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" type="text/css" href="/css/style.css">
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<!-- YOUR own local JS -->
<script type="text/javascript" src="/js/app.js"></script>
</head>
<body class="text-white">
	<div class="container mx-auto p-5">
		<div class="card mx-auto p-5 bg-dark border-secondary">
			<h3 class="mb-4">${book.title}</h3>
			<p><strong>Description:</strong> ${book.description}</p>
			<p><strong>Language:</strong> ${book.language}</p>
			<p><strong>Number of Pages:</strong> ${book.numberOfPages}</p>
		</div>
		<div class="d-flex m-4 justify-content-center">
			<a href="/books">Back to Books List</a>		
		</div>
	</div>
</body>
</html>