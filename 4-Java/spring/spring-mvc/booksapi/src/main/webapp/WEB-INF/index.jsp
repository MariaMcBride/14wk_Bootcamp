<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Books</title>
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
<body>
	<div class="container mx-auto p-5">
		<h4 class="heading mb-4">All Books</h4>
		<!-- <div class="card mx-auto p-5"> -->
		<table class="table">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Title</th>
					<th scope="col">Language</th>
					<th scope="col"># Pages</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="row" items="${books}">
					<tr>
						<td><c:out value="${book.bookId}" /></td>
						<td><c:out value="${book.title}" /></td>
						<td><c:out value="${book.description}" /></td>
						<td><c:out value="${book.pages}" /></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		<!-- </div> -->
	</div>
</body>
</html>