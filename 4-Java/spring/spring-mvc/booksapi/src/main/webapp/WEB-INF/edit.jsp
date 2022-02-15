<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit Book</title>
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
		<h2 class="text-center mb-4 text-white">Edit Book</h2>
		<div class="card mx-auto p-5 bg-secondary text-dark">
			<form:form action="/books/${book.id}" method="POST" modelAttribute="book">
				<input type="hidden" name="_method" value="put">
                <div class="mb-3">
                    <form:label path="title" for="formInput" class="form-label">Title:</form:label>
                    <form:errors path="title" class="text-danger"/>
                    <form:input type="text" class="form-control" id="formInput" path="title" placeholder=""/>
                </div>
                <div class="mb-3">
                    <form:label path="description" for="formControlTextarea" class="form-label">Description:</form:label>
                    <form:errors path="description" class="text-danger"/>
                    <form:textarea class="form-control" id="formControlTextarea" path="description" rows="4"></form:textarea>
                </div>
                <div class="mb-3">
                    <form:label path="language" for="formInput" class="form-label">Language:</form:label>
                    <form:errors path="language" class="text-danger"/> 
                    <form:input type="text" class="form-control" id="formInput" path="language" placeholder=""/>
                </div>
                <div class="mb-3">
                    <form:label path="numberOfPages" for="formInput" class="form-label">Pages:</form:label>
                    <form:errors path="numberOfPages" class="text-danger"/>
                    <form:input type="number" class="form-control" id="formInput" path="numberOfPages" placeholder=""/>
                </div>
                <div class="d-flex align-items-center justify-content-end gap-3">
                	<a href="/books/${book.id}" class="btn btn-warning  text-white fw-bold">Cancel</a>
                    <input type="submit" value="Submit" class="btn btn-primary fw-bold">
                </div>
            </form:form>
		</div>
	</div>
</body>
</html>