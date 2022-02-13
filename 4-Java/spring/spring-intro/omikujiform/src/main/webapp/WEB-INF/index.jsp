<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Omikuji</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" type="text/css" href="/css/style.css">
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container mx-auto p-5">
		<h2 class="text-center mb-4">Send an Omikuji!</h2>
		<div class="card mx-auto p-5">
			<form action="/omikuji/submit" method="POST">
				<div class="mb-3">
					<label for="formInput" class="form-label">Pick any number
						from 5 to 25:</label> <select class="form-select" name="number"
						aria-label="Default select example">
						<option selected disabled hidden>0</option>
						<c:forEach var="number" begin="5" end="25">
							<option value="${number}"><c:out value="${number}" />
						</c:forEach>
					</select>
				</div>
				<div class="mb-3">
					<label for="formInput" class="form-label">Enter the name of
						any city:</label> <input type="text" class="form-control" id="formInput"
						name="city" placeholder="City">
				</div>
				<div class="mb-3">
					<label for="formInput" class="form-label">Enter the name of
						any real person:</label> <input type="text" class="form-control"
						id="formInput" name="person" placeholder="Person">
				</div>
				<div class="mb-3">
					<label for="formInput" class="form-label">Enter
						professional endeavor or hobby:</label> <input type="text"
						class="form-control" id="formInput" name="occupation"
						placeholder="Occupation">
				</div>
				<div class="mb-3">
					<label for="formInput" class="form-label">Enter any type of
						living thing:</label> <input type="text" class="form-control"
						id="formInput" name="thing" placeholder="Living thing">
				</div>
				<div class="mb-3">
					<label for="formControlTextarea" class="form-label">Say
						something nice to someone:</label>
					<textarea class="form-control" id="formControlTextarea" name="nice"
						rows="3"></textarea>
				</div>
				<p>
					<em>Send and show a friend</em>
				</p>
				<div class="d-flex justify-content-end">
					<input type="submit" value="Send" class="btn send-form">
				</div>
			</form>
		</div>
	</div>
</body>
</html>