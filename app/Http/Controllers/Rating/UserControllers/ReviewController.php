<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Repositories\Articles\UserArticlesRepository;
use App\Repositories\Reviews\UserReviewsRepository;
use App\Repositories\SEO\UserSEORepository;

class ReviewController extends UserController
{
    public function __construct(UserSEORepository $SEORepository) { parent::__construct($SEORepository); }

    public function index($review_id, UserReviewsRepository $reviewsRepository, UserArticlesRepository $articlesRepository)
    {
        $review = $reviewsRepository->getReviewById($review_id);
        if ($review === null)
        {
            abort(404);
        }

        $articles = $articlesRepository->getSomeLastArticle(2);
        $seo = $this->getSEOAttributes('review');
        return view('rating.user.review.index', ['review' => $review, 'articles' => $articles, 'seo' => $seo]);
    }
}