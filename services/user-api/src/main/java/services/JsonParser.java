package services;

import com.fasterxml.jackson.databind.ObjectMapper;

import log.Logger;

public class JsonParser {
	public static <T extends Object> T fromJson(String json, Class<T> tClass) {
		try {
		ObjectMapper mapper = new ObjectMapper();
		T parsed = (T) mapper.readValue(json, tClass);
		return parsed;
		}catch(Exception e) {
			Logger.outputLog("fromJson", e.getMessage());
			// 変換に失敗したらnullを返す
			return null;
		}
	}
	
	public static <T extends Object> String toJson(T obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		}catch (Exception e) {
			Logger.outputLog("toJson", e.getMessage());
			return null;
		}
	}
}
