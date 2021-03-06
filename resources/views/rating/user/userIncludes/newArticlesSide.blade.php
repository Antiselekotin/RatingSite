<aside class="new-articles-side pt-4">
    <h3 class="h h--side mb-3">{{$headers['side']}}</h3>
    @foreach($articles as $article)
        <div class="new-articles-side__item p-3">
            <a href="{{ route('rating.user.articles.show', $article->article_slug) }}" class="new-articles-side__link">
                <img src="{{$article->article_main_image}}"
                     alt="Картинка статьи номер {{$article->article_id}}"
                     class="new-articles-side__img mb-4">
                <h4 class="new-articles-side__title mb-2">{{$article->article_title}}</h4>
                <p class="new-articles-side__description mb-2">{{$article->article_description}}</p>
                <small class="new-articles-side__read">Читать статью ...</small>
            </a>
        </div>
    @endforeach
</aside>
