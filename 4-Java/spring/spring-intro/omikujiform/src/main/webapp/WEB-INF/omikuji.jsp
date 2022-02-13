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
		<h2 class="text-center mb-4">Here's Your Omikuji!</h2>
		<div class="card omikuji mx-auto p-4 text-center">
			<p class="mb-0">
			In ${number} years, you will live in ${city} with ${person}
            as your roommate, ${occupation} for a living. The next time you see a ${thing},
            you will have good luck. Also, ${nice}.
            </p>
		</div>
		<div class="text-center mt-4">		
		<a href="/omikuji">Go Back</a>
		</div>
	</div>
</body>
</html>