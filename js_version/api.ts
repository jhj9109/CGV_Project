import axios from "axios";

interface RequestOption {
  url: string;
  method: string;
  headers?: object;
  payload?: object;
  params?: any;
}

const DEFAULT_HEADERS = {
  Host: "www.cgv.co.kr",
  Origin: "http://www.cgv.co.kr",
  "Content-Type": "application/json; charset=UTF-8"
}

export const getHtmlString = async ({
  url,
  method,
  headers,
  payload,
  params,
}: RequestOption) => {

  if (headers === undefined) {
    headers = DEFAULT_HEADERS
  }

  if (payload === undefined) {
    payload = {}
  }

  try {

    // if (url === 'http://www.cgv.co.kr/common/showtimes/iframeMovie.aspx?midx=86996&mcode=20032671') {
    //   console.log(`요청 => [${method.toUpperCase()}] ${url}`)
    // }

    // data = {d: "html 구조" || "[]""}

    const response = await axios({
      url,
      method,
      headers,
      data: payload,
      params,
    });

    // console.log(response);

    const { data } = response;

    const htmlString = data.d as string;

    return htmlString;

  } catch (error) {

    // throw error;

    console.error(error);

    return '';
  }
}

export const requestMovieTypes = (midx: string) => {
  
  const BASE_URL = `http://www.cgv.co.kr/movies/detail-view/show-times.aspx`;
  
  const params = {
    midx
  };

  const htmlString = getHtmlString({
    url: BASE_URL,
    method: 'get',
    params,
  });

  return htmlString;
}

export const requestCityInfo = (midx: string, mcode: string) => {
  
  const BASE_URL = `http://www.cgv.co.kr/common/showtimes/iframeMovie.aspx`;
  // const BASE_URL = `http://www.cgv.co.kr/common/showtimes/iframeMovie.aspx?midx=86996&mcode=20032671`;
  
  const headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6,zh-CN;q=0.5,zh;q=0.4',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Cookie': "ASP.NET_SessionId=vqtqgulzo525bskcl2mvzrvo; WMONID=5X1NarWRNVS; _gid=GA1.3.1484714990.1684040557; _gat_UA-47951671-5=1; _gat_UA-47951671-7=1; _gat_UA-47126437-1=1; _ga=GA1.1.395815294.1684040557; _ga_559DE9WSKZ=GS1.1.1684070008.4.1.1684070009.59.0.0; CgvCM=72xEUAJXhOCK2mnjNUkpimSSKHRdRRJbea7NVZBjQpH4VsA1b6J0xHeSdzTIzMPXfUyIqac+qgOcoVa4VsBYiI36b1YoNHPU7ggeJPaaUvaDeKKY34fpipxzfzOI74HSmv9rUWtcI8eqIXW7pDDBzXHQEOMnTpfyUi9eIlDuKBqVeUT7PS8DhtoOPpIhVrfFqeRWumOpIbLdBLdQG6iBJKRvupn/Qzc70sv+vXAqng9q52jdoMI2ooEIV1TFHj7s",
    'User-Agent': 'PostmanRuntime/7.32.2',
    'Host': 'www.cgv.co.kr',
    'Referer': `http://www.cgv.co.kr/movies/detail-view/show-times.aspx?midx=${midx}`,
    // 'Referer': `http://www.cgv.co.kr/movies/detail-view/show-times.aspx?midx=${midx}`,
  }

  const params = {
    midx,
    mcode,
  };

  // console.log(params);

  const htmlString = getHtmlString({
    url: BASE_URL,
    method: 'get',
    params,
    headers
  });

  return htmlString;
}

export const requestDates = (midx: string, mcode: string, areacode: string, date: string) => {
  
  const BASE_URL = `http://www.cgv.co.kr/common/showtimes/iframeMovie.aspx`;
  
  const headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6,zh-CN;q=0.5,zh;q=0.4',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Cookie': "ASP.NET_SessionId=vqtqgulzo525bskcl2mvzrvo; WMONID=5X1NarWRNVS; _gid=GA1.3.1484714990.1684040557; _gat_UA-47951671-5=1; _gat_UA-47951671-7=1; _gat_UA-47126437-1=1; _ga=GA1.1.395815294.1684040557; _ga_559DE9WSKZ=GS1.1.1684070008.4.1.1684070009.59.0.0; CgvCM=72xEUAJXhOCK2mnjNUkpimSSKHRdRRJbea7NVZBjQpH4VsA1b6J0xHeSdzTIzMPXfUyIqac+qgOcoVa4VsBYiI36b1YoNHPU7ggeJPaaUvaDeKKY34fpipxzfzOI74HSmv9rUWtcI8eqIXW7pDDBzXHQEOMnTpfyUi9eIlDuKBqVeUT7PS8DhtoOPpIhVrfFqeRWumOpIbLdBLdQG6iBJKRvupn/Qzc70sv+vXAqng9q52jdoMI2ooEIV1TFHj7s",
    'User-Agent': 'PostmanRuntime/7.32.2',
    'Host': 'www.cgv.co.kr',
    'Referer': `http://www.cgv.co.kr/common/showtimes/iframeMovie.aspx?midx=${midx}&mcode=${mcode}`,
  }

  const params = {
    midx,
    mcode,
    areacode,
    date,
  };

  // console.log(params);

  const htmlString = getHtmlString({
    url: BASE_URL,
    method: 'get',
    params,
    headers
  });

  return htmlString;
}
