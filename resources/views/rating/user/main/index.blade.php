@extends('layouts.user')

@section('content')
    @include('rating.user.userIncludes.aboutSite')
    @include('rating.user.userIncludes.searchBar')
    <div class="splitter pt-6 ph-4">
        @include('rating.user.main.mainIncludes.bigColumn')
        @include('rating.user.main.mainIncludes.sideColumn')
    </div>
    @include('rating.user.userIncludes.forms.leaveReviewForm')
@endsection