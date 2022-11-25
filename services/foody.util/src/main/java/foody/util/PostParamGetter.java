package foody.util;

import java.io.BufferedReader;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import jakarta.servlet.http.HttpServletRequest;
import foody.log.Logger;

public class PostParamGetter {
	public static String getPostRequestParamStr(HttpServletRequest request) {
		try {
			
			BufferedReader reader = request.getReader();
			Stream<String> lines = reader.lines();
			String result = lines.collect(Collectors.joining("\r\n"));
			return result;
			
		}catch(Exception e){
			Logger.outputLog("getPostRequestParamStr", e.getMessage());
			// 取得に失敗したらnullを返す
			return null;
		}
	}
	
	public static <T extends Object> T getPostRequestFromJson(
			HttpServletRequest request, 
			Class<T> tClass) {
		String requestParams  = PostParamGetter.getPostRequestParamStr(request);
		if (requestParams == null) return null;
		T parsed = JsonParser.fromJson(requestParams, tClass);
		return parsed;
	}
}
