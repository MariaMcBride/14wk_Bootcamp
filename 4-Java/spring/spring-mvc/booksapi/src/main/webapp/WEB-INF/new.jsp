<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add New Book</title>
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
		<h2 class="text-center mb-4">Add New Book</h2>
		<div class="card mx-auto p-5 bg-secondary text-dark">
			<form action="/books/submit" method="POST">
				<div class="mb-3">
					<label for="formInput" class="form-label">Title:</label> <input
						type="text" class="form-control" id="formInput" name="title"
						placeholder="">
				</div>
				<div class="mb-3">
					<label for="formControlTextarea" class="form-label">Description:</label>
					<textarea class="form-control" id="formControlTextarea" name="description"
						rows="4"></textarea>
				</div>
				<div class="mb-3">
					<label for="formInput" class="form-label">Language:</label> <input type="text" class="form-control"
						id="formInput" name="language" placeholder="">
				</div>
				<div class="mb-3">
					<label for="formInput" class="form-label">Pages:</label> <input type="number"
						class="form-control" id="formInput" name="pages"
						placeholder="">
				</div>
				<div class="d-flex justify-content-end">
					<input type="submit" value="Submit" class="btn btn-primary fw-bold">
				</div>
			</form>
		</div>
	</div>
</body>
</html>