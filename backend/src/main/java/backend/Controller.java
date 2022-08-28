package backend;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author duynguyen
 **/
@RestController
public class Controller {

    @GetMapping("")
    public String test() {
        return "test";
    }

    @GetMapping("/api/v1/state")
    public Map<String, Object> api() {
        Map<String, Object> data = new HashMap<>();
        Map<String, Object> error = null;

        List<Incident> incidents = new ArrayList<>();
        incidents.add(Incident.builder().id(1).codeName("Incident A").loc(Location.builder().x(18).y(8).build()).officerId(1).build());

        List<Officer> officers = new ArrayList<>();
        officers.add(Officer.builder().id(1).badgeName("asfasdsad").loc(Location.builder().x(50).y(35).build()).build());
        officers.add(Officer.builder().id(2).badgeName("test 2").loc(Location.builder().x(10).y(20).build()).build());

        data.put("incidents", incidents);
        data.put("officers", officers);

        Map<String, Object> res = new HashMap<>();
        res.put("data", data);
        res.put("error", error);
        return res;
    }

    @AllArgsConstructor
    @Data
    @NoArgsConstructor
    @Builder
    private static class Incident {
        int id;
        String codeName;
        Location loc;
        int officerId;
    }

    @AllArgsConstructor
    @Data
    @NoArgsConstructor
    @Builder
    private static class Officer {
        int id;
        String badgeName;
        Location loc;
    }

    @AllArgsConstructor
    @Data
    @NoArgsConstructor
    @Builder
    private static class Location {
        int x;
        int y;
    }


}