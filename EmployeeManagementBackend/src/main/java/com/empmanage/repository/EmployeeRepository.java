package com.empmanage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.empmanage.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
