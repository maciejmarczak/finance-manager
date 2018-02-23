package org.maciejmarczak.financemanager.operation;

import org.maciejmarczak.financemanager.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/manager/operations")
public class OperationController {

    private final OperationService operationService;

    @Autowired
    public OperationController(OperationService operationService) {
        this.operationService = operationService;
    }

    @PostMapping
    public Operation addOperation(@Valid @RequestBody Operation operation, @AuthenticationPrincipal User user) {
        operation.setIssuer(user);
        return operationService.addOperation(operation);
    }

    @DeleteMapping("/{operationId}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteOperation(@PathVariable("operationId") int id, @AuthenticationPrincipal User user) {
        operationService.deleteOperationById(user, id);
    }

    @GetMapping
    public List<Operation> getAllOperations(@AuthenticationPrincipal User user) {
        return operationService.getAllOperationsByIssuer(user);
    }

}
