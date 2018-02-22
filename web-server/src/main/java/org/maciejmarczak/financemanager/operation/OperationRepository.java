package org.maciejmarczak.financemanager.operation;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

interface OperationRepository extends JpaRepository<Operation, Long> {
    List<Operation> getAllByIssuerId(Long issuerId);
}
