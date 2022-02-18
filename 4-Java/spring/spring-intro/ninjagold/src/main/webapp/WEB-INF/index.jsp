<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
		<!DOCTYPE html>
		<html>

		<head>
			<meta charset="UTF-8">
			<title>Ninja Gold</title>
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
			<div id="wrapper">
				<div id="balance">
					<label for="gold">Your Gold:</label> <input type="text" id="gold" value="${gold}" readonly />
					</p>
				</div>
				<div id="locations">
					<%-- <c:forEach var="location" begin="<c:out value=" ${min}" />" end="
					<c:out value="${max}" />">
					<form action="/gold/process" method="POST" class="border">
						<h2>
							<c:out value="${location}" />
						</h2>
						<p>(earns
							<c:out value="${min}" />-
							<c:out value="${max}" /> gold)
						</p>
						<input type="hidden" name="propertyType" value=<c:out value="${location}" /> />
						<input type="submit" value="Find Gold!" class="btn border">
					</form>
					</c:forEach> --%>
					<form action="/gold/process" method="POST" class="location">
						<h4>Farm</h4>
						<p>(earns 10-20 gold)</p>
						<input type="hidden" name="propertyType" value="farm" /> <input type="submit" value="Find Gold!"
							class="btn border">
					</form>
					<form action="/gold/process" method="POST" class="location">
						<h4>Cave</h4>
						<p>(earns 5-10 gold)</p>
						<input type="hidden" name="propertyType" value="cave" /> <input type="submit" value="Find Gold!"
							class="btn border">
					</form>
					<form action="/gold/process" method="POST" class="location">
						<h4>House</h4>
						<p>(earns 2-5 gold)</p>
						<input type="hidden" name="propertyType" value="house" /> <input type="submit"
							value="Find Gold!" class="btn border">
					</form>
					<form action="/gold/process" method="POST" class="location">
						<h4>Casino</h4>
						<p>(earns/takes 0-50 gold)</p>
						<input type="hidden" name="propertyType" value="casino" /> <input type="submit"
							value="Find Gold!" class="btn border">
					</form>
					<form action="/gold/process" method="POST" class="location">
						<h4>Spa</h4>
						<p>(takes 5-20 gold)</p>
						<input type="hidden" name="propertyType" value="spa" /> <input type="submit" value="Relax"
							class="btn border">
					</form>
				</div>
				<div id="activities-container">
					<span>Activities:</span>
					<div id="activities" name="activities">
						<ul>
							<c:forEach var="activity" items="${activities}">
								<li>${activity}</li>
							</c:forEach>
						</ul>
					</div>
				</div>
				<div class="d-flex justify-content-end">
					<a href="/reset" class="btn btn-danger me-4 fw-bold">Reset</a>
				</div>
			</div>

		</body>

		</html>