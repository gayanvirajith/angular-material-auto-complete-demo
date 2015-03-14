<?php

/**
 * Class SearchController
 */
class SearchController extends ApiController {


	/**
	 * @var \Acme\Transformers\UserTransformer
     */
	protected $userTransformer;

	/**
	 * @param \Acme\Transformers\UserTransformer $userTransformer
     */
	function __construct(Acme\Transformers\UserTransformer $userTransformer)
	{
		$this->userTransformer = $userTransformer;
	}

	/**
	 * Display a listing of the resource.
	 * GET /search
	 *
	 * @param string $text
	 * @return Response
	 */
	public function index($text = '')
	{

		$users = User::where('name', 'LIKE', '%' . $text .'%')
			->orWhere('color', 'LIKE', '%' . $text .'%')
			->orWhere('location', 'LIKE', '%' . $text .'%')
			->get();
		if ($text !== '') {
			return $this->respond([
				'data' => $this->userTransformer->transformCollection($users)
			]);
		}else {
			return
				$this->respondBadRequest(
					'Search text is missing'
				);
		}

	}
}