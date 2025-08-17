class useApiUrls {
  private _fetch = async (url: string) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': `nik-12-08-2025`,
      },
    });
    return response.json();
  };

  private __baseUrl = '/api';
  public useFeed = async () => {
    const url = `${this.__baseUrl}/videos/`;
    return this._fetch(url);
  };
  public useSearchKey = (q: string) => {
    const url = `${this.__baseUrl}/search?q=${encodeURIComponent(q)}`;
    return this._fetch(url);
  };
}

export default useApiUrls;
